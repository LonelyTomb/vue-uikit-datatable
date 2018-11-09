# vue-uikit-datatable
A Simple Datatable for the UiKit 3.0 Framework
# To Use
Import the Datatable by using
```
import Vue from 'vue'
import Datatable from 'vue-uikit-table'
Vue.use(Datatable)
```

## Basic Example
```
<template>
    <section class="uk-container uk-section">
        <Datatable :titles="titles" :itemList="usersList"></Datatable>
    </section>
</template>

<script>
const titles = [
  {
    prop: "username",
    name: "Username"
  },
  {
    prop: "email",
    name: "Email"
  },
  {
    prop: "gender",
    name: "Gender"
  }
];

const usersList = [
{
    "id": "1",
    "username": "hirthe.alyson",
    "email": "blaze30@example.com",
    "gender": "male",
},
{
    "id": "2",
    "username": "oklein",
    "email": "hipolito.jaskolski@example.com",
    "gender": "male",
},
{
    "id": "3",
    "username": "bahringer.leonel",
    "email": "candace14@example.com",
    "gender": "female",
}];

export default {
  name: "UserControls",
  data() {
    return {
      titles,
      usersList
    };
  },
  methods: {
  }
};
</script>
```

## For Checkbox selection
To toggle this, add the prop `checkbox-filter`
```
:checkbox-filter="true"
```

To process get the items selected, add `selected-change`

```
@selected-change='function-to-handle-selected-items()'
```

### Example
```
<Datatable checkbox-filter="true" @selected-change='selected(items)'></Datatable>

methods:{
selected(items) {
      console.log(items);
    }
}
```

##  To Use Search Box
Add the prop `search-attrs`
```
:searchAttrs="columns-to-be-searched"
```

### Example
```
<Datatable :search-attrs="searchAttrs"></Datatable>

<script>
export default{
    data(){
        return{
            searchAttrs: ["username","email"],
        }
    }
}
</script>
```

# For Development 


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Run your end-to-end tests
```
yarn run test:e2e
```
