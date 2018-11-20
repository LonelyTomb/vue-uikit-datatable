# __vue-uikit-datatable__
> A Simple Datatable for the UiKit 3.0 Framework.

> For npm: 
```shell
npm install vue-uikit-datatable
```
> For yarn
```shell
yarn add vue-uikit-datatable
```

# To Use
Import the Datatable by using
```javascript
import Vue from 'vue'
import Datatable from 'vue-uikit-table'
Vue.use(Datatable)
```

## Basic Example
```jsx
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
Checkbox selection is on by default, remove it by using the prop `checkbox-filter`
```jsx
:checkbox-filter=false
```

To process get the items selected, add `selected-change`

```jsx
@selected-change='function-to-handle-selected-items'
```

### Example
```jsx
<Datatable :checkbox-filter=true @selected-change='selected'></Datatable>

data(){
    items:[]
}
methods:{
selected(items) {
      console.log(items);
    }
}
```

##  To Use Search Box
Add the prop `search-attrs`
```jsx
:searchAttrs="columns-to-be-searched"
```

### Example
```jsx
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