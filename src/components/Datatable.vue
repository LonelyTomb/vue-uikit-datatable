<template>
  <div class="uk-card uk-card-default">
    <div class="uk-card-header uk-flex-row uk-flex uk-flex-between">
      <div class="uk-search uk-search-default">
        <input
          type="search"
          class="uk-search-input uk-search-toggle"
          placeholder="Search"
          v-model="searchTerm"
          @keyup="filterData();"
        />
      </div>
    </div>
    <div class="uk-card-body">
      <div class="uk-overflow-auto">
        <table
          class="uk-table uk-table-hover uk-table-striped uk-table-responsive"
        >
          <thead>
            
            <th v-if="checkboxFilter == true"></th>
            <th>No.</th>
            <th v-for="{ name } in titles">{{ name }}</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in chunkedResult()" :key="item.id">
              <td v-if="checkboxFilter == true">
                <input
                  type="checkbox"
                  name="checkbox-filter"
                  id="checkbox-filter"
                  class="uk-checkbox"
                  :value="item"
                  v-model="selected"
                  @change="$emit('selected-change', selected);"
                />
              </td>
              <td>{{ Number(index) + offset * limit + 1 }}</td>
              <td v-for="{ prop } in titles">{{ item[prop] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="uk-tile uk-tile-xsmall uk-tile-muted uk-padding-small">
      <ul class="uk-pagination">
        <li v-if="offset !== 0">
          <a class="uk-button uk-button-link" @click.prevent="offset -= 1;"
            ><span class="uk-margin-small-right" uk-pagination-previous></span>
            Previous</a
          >
        </li>
        <li
          class="uk-margin-auto-left"
          v-if="
            chunkedResult().length !== items.length &&
              chunkedResult().length + limit * offset < items.length
          "
        >
          <a @click.prevent="++offset;" class="uk-button uk-button-link"
            >Next <span class="uk-margin-small-left" uk-pagination-next></span
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "dataTable",
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checkboxFilter: {
      type: Boolean,
      default: true
    },
    itemList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    searchAttrs: {
      type: Array,
      default: function() {
        return [];
      }
    },
    titles: {
      type: Array,
      default: function() {
        return [
          {
            prop: "",
            name: ""
          }
        ];
      }
    }
  },
  data() {
    return {
      offset: 0,
      limit: 4,
      items: this.itemList,
      searchTerm: "",
      selected: []
    };
  },
  mounted() {
    this.$emit("selected", []);
  },
  methods: {
    chunkedResult() {
      if (this.offset == 0) {
        return this.items.slice(this.offset, this.limit);
      } else {
        return this.items.slice(
          this.limit * this.offset,
          this.limit * (this.offset + 1)
        );
      }
    },
    filterData() {
      this.offset = 0;
      this.searchTerm = this.searchTerm.toLowerCase();
      //If search is empty return unmodified array
      if (this.searchTerm == "") {
        this.items = this.itemList;
        return;
      }
      //Return filtered array
      this.items = this.itemList.filter(item =>
        this.searchAttrs.some(search =>
          item[search].toLowerCase().includes(this.searchTerm)
        )
      );
    }
  }
};
</script>

<style></style>
