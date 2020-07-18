# copernicus

doctor task management prototype coding assignment

## setup

✨ node v12.16.x please! ✨

```bash
yarn install
yarn start # you'll be taken to http://localhost:3000/ in your default browser
```

👩🏻‍💻 storybook/tests 🐁

```bash
yarn storybook # to see stories
yarn test # to run tests
```

## notes/caveats

- possibly slooow api requests/list rendering: i make a request to `getDoctors` on page load, which would be real bad in a production environment where there are a lot of doctors. possible solutions:
  1. paginate the request or virtualize the list rendering
  2. show results for a `getRecentlyViewedDoctors` request, and use the search input to look up other doctors
  3. don't show doctors list until we get search results back
- console errors 😅: when filtering doctors, react complains about switching between controlled vs. uncontrolled input. the text field is _always_ controlled, but it might be some material design idiosyncracy that i don't know about
- responsiveness: i made some assumptions about the user's device when using this feature--likely a PC that they can multitask on, maybe a tablet. hence, this would look terrible on mobile
- testing: didn't finish some of the component tests, especially the ones that require api mocking. they're marked as todo. utils also need to be tested
- types: i haven't worked with untyped APIs in a long time! so i'm very curious to hear about how y'all handle that, or how type checking is implemented otherwise

## resources

this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
