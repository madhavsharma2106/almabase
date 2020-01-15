# Product Compare Application

The Product compare application allows you to compare products and their attributes.

### `Design Philosophy`

The product is designed with the[Atomic Design Philosophy](https://bradfrost.com/blog/post/atomic-web-design/) in mind.

The underlying idea is to create isolated componets that can be used to build bigger components. The component in this applications have been segregated accordingly.

1. Atoms
2. Molecules
3. Organisms
4. Templates
5. Pages

### `Scripts`

You can leverage the following scripts to run the application and storybook.

1. Run Project: `yarn start`
2. Run Storybook: `yarn run storybook`

### `StoryBook`

[Storybook](https://storybook.js.org) is a user interface development environment and playground for UI components. The tool enables developers to create components independently and showcase components interactively in an isolated development environment.

I have created three components as examples of how I would like to achive the final state of the product.

### `Deployment`

As I dont have a private cloud to deploy to - I am leaving the depoyment steps as to how I would deploy the application.

I think this should work, but as is with anything me and devops - I'm not sure.

1. Build and tag docker image - `docker build -t productcompare:dev`
2. Spinup a container - `docker run -v ${PWD}:/app -v /app/node_modules /app/package.json -p 3001:3000 --rm sample:dev`
3. Build image and start container - `docker-compose up -d --build`
4. Create deployement - `kubectl create -f deployment.yaml`
