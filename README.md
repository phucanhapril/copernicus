# copernicus

doctor task management prototype built for galileo health

## setup

✨ node v12.16.x please! ✨

```bash
yarn install
yarn start
# go to http://localhost:3000/ in your browser
```

## functional reqs

✔ add new doctors from a list of existing doctors

✔ adding a doctor adds the list of tasks for that doctor

✔ tasks show up in order of desc. priority

✔ when adding a task list existing lists remain instead of being replaced

## notes/caveats

- possibly slooow api requests: i make a request to `getDoctors` on page load, which would be real bad in a production environment where there are a lot of doctors
  - possible solutions: 1. paginate the request, 2. use a different request to `getRecentlyViewedDoctors` and add a search input so the user can look up doctors, 3. don't show doctors list unless the user has already searched
- responsiveness: i made some assumptions about the user's device when using this feature--likely a PC that they can multitask on, maybe a tablet. hence, this would look terrible on mobile
- testing: didn't finish these, especially the ones that require api mocking

## resources

this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
