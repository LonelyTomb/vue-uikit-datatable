<template>
   <section class="uk-container uk-section">
        <Datatable :titles="titles" :itemList="usersList"></Datatable>
    </section>
</template>

<script>
import Datatable from "./../Datatable";
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
    id: "1",
    username: "hirthe.alyson",
    email: "blaze30@example.com",
    gender: "male"
  },
  {
    id: "2",
    username: "oklein",
    email: "hipolito.jaskolski@example.com",
    gender: "male"
  },
  {
    id: "3",
    username: "bahringer.leonel",
    email: "candace14@example.com",
    gender: "female"
  }
];
export default {
  name: "BasicExample",
  components: {
    Datatable
  },
  data() {
    return {
      titles,
      usersList
    };
  }
};
</script>