#!/usr/bin/env bash

echo "
# THIS ENV FILE IS AUTO-GENERATED FOR DOCKER-COMPOSE


# START .env contents

" > .env
cat ../../.env >> .env
echo "


# START GLOBAL ENV VAR DUMP

" >> .env
(set -o posix ; set) >> .env
