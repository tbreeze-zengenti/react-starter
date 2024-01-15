#!/bin/bash
now=$(date +"%d%m%y_%H%M%s")
git tag storybook-$now
git push origin storybook-$now
