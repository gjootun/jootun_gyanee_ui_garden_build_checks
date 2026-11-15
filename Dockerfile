# build the production version of the React app
FROM node:20-alpine AS build
# Folder inside the container
WORKDIR /jootun_gyanee_ui_garden_build_checks
# Copy the package files first so Docker can cache the install step
COPY package*.json ./
# Install the exact versions from package-lock.json
# HUSKY=0 stops the "prepare" script from trying to set up git hooks in the image
ENV HUSKY=0
RUN npm ci --legacy-peer-deps
# Copy the rest of the project and create the optimized production build
COPY . .
RUN npm run build

# serve the built files with nginx
FROM nginx:alpine
# The site files live in the working dir jootun_gyanee_ui_garden_build_checks
WORKDIR /jootun_gyanee_ui_garden_build_checks
# Copy only the finished build
COPY --from=build /jootun_gyanee_ui_garden_build_checks/build .
# Tell nginx to listen on port 8018 and serve this folder
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8018
# Keep nginx running in the foreground so the container stays alive
CMD ["nginx", "-g", "daemon off;"]