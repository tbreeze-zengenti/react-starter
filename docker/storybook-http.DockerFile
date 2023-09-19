ARG builder_image
FROM ${builder_image} as basebuilder
FROM pierrezemb/gostatic
COPY manifest.storybook.json /manifest.json
COPY --from=basebuilder  /usr/src/app/.out /usr/src/app/dist/storybook
ENTRYPOINT ["/goStatic", "--path", "/usr/src/app/dist", "--port", "8080"]
EXPOSE 8080
