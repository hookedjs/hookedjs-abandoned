import React from "react";
import { Box, Button } from "rebass";
import { observable, reaction, set, toJS } from "mobx";
import { observer, useObservable } from "mobx-react-lite";
import isEmail from 'validator/lib/isEmail';
// import {Axios} from "~/core/data/Axios";
import { MobxPersist } from "../polyfills/MobxPersist";
import { SuccessIcon } from "../primitives/SuccessIcon";
import { LeadProfile } from "../state/LeadProfile";
import { Loading } from "./Loading";

export const state = observable({
  form: {
    name: "",
    email: "",
    message: ""
  },
  submitted: false,
  loading: false,
  errors: []
});
MobxPersist("ContactFormState", state).then(() => {
  // Keep form up to date with lead intel
  set(state.form, { ...state.form, name: LeadProfile.name, email: LeadProfile.email });
  reaction(() => toJS(LeadProfile), () => {
    set(state.form, { ...state.form, name: LeadProfile.name, email: LeadProfile.email });
  });
});

export type props = {};

export const ContactForm = observer(({}: props) => {
  const _state = useObservable(state);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Cheap validation TODO: Implement full validation
    const optionalFields: string[] = [];
    let errors = Object.entries(_state.form)
      .filter(([key, value]) => !value && !optionalFields.includes(key))
      .map(([key, value]) => key);
    if (!isEmail(_state.form.email)) errors.push("email");
    // @ts-ignore: Ingore unset type for now
    if (errors.length) {_state.errors = errors; return;}
    set(_state, { ..._state, errors: [], loading: true });

    // Update LeadProfile
    set(LeadProfile, { ...LeadProfile, name: _state.form.name, email: _state.form.email });

    // TODO: post to api
    // Axios.post("/feedback", _state.form)
    //   .then(function(response) {
    //     set(_state, {
    //       submitted: true,
    //       loading: false,
    //       form: {
    //         ..._state.form,
    //         message: "",
    //         reason: "",
    //       },
    //     });
    //   })
    //   .catch(function(error) {
    //     set(_state, {
    //       loading: false,
    //     });
    //   });

    set(_state, {
      submitted: true,
      loading: false,
      form: {
        ..._state.form,
        message: "",
      }
    });
  };

  return (
    <Box>
      <Box className="header">
        <h3>Get Help</h3>
        <p>Have a question? Fill out the form below to let us know how we can help.</p>
      </Box>
      <Box className="body">
        {_state.loading && (
          <Box className="success-message">
            <Loading/>
            <p>Feedback received. Thanks!</p>
          </Box>
        )}
        {_state.submitted && (
          <Box className="success-message">
            <SuccessIcon/>
            <p>Feedback received. Thanks!</p>
          </Box>
        )}
        {!_state.submitted && !_state.loading && (
          <form onSubmit={onSubmit}>
            <label>Name *</label>
            <input
              type="text"
              placeholder="Your Name"
              value={_state.form.name}
              onChange={(e) => (_state.form.name = e.target.value)}
              // error={_state.errors.includes("name") && !_state.form.name}
            />
            <label>Email *</label>
            <input
              type="text"
              placeholder="Email Address"
              value={_state.form.email}
              onChange={(e) => (_state.form.email = e.target.value)}
              // error={_state.errors.includes("email") && !EmailAddressRe.test(_state.form.email)}
            />
            <label>Message *</label>
            <input
              type="textarea"
              placeholder="Write your message here"
              value={_state.form.message}
              onChange={(e) => (_state.form.message = e.target.value)}
              // error={_state.errors.includes("message") && !_state.form.message}
            />
            <Button
              disabled={_state.loading}
              onClick={onSubmit}
            >
              {_state.loading ? "Sending..." : "Submit Message"}
            </Button>
          </form>
        )}
      </Box>
      <Box className="footer">
        <p>
          <a href="https://www.aarp.org/about-aarp/privacy-policy/" target="_blank">
            Privacy Policy
          </a>
        </p>
      </Box>

      {/*<style jsx>{`
        .header {
          border-bottom: 1px solid #ccc;
        }
        .header p {
          margin: auto;
          max-width: 300px;
        }
        .footer {
          border-top: 1px solid #ccc;
        }
      `}</style>*/}
    </Box>
  );
});
