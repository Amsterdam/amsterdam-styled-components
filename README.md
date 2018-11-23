# Amsterdam Styled Components
NOTE: this is a draft. We are still experimenting and configuring. Do not use in production.

## Usage

### Development
1. `npm install`
2. `npm run storybook`

To test your components in other repo's, do the following:
1. Run `npm run transpile:watch`, this will watch your files and transpile them to the package lib directory.
2. cd to the package you want to test and run `npm link`.
3. Go to the repo where you want to use your package and run `npm link <package-name>`. `<package-name>` can be found in the `package.json` you linked in step 2.

Now you can import the package like you would do like a normal npm dependency. Changes you will make in your package will be seen in your repo. 
