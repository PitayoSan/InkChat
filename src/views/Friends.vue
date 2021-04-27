<template>
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
</template>

<script>
/*
import { reactive } from "vue";
import TableLite from "../components/TableLite";

    new Vue({
        name: 'Friends',
        components:{
            TableLite
        },
        setup(){
        const friends_table = reactive({
            isLoading: false,
            isReSearch: false,
            columns: [
                {
                label: "User",
                field: "name",
                width: "8%",
                sortable: true,
                display: function (row) {
                    return (
                    '<a href="#" data-id="' + row.user_id + '" class="name-btn">' + row.name + "</button>"
                    );
                    },
                },
                {
                label: "",
                field: "quick",
                width: "10%",
                display: function (row) {
                    return (
                    '<button type="button" data-id="' + row.user_id + '" class="quick-btn">Enviar Mensaje</button>'
                    );
                    },
                },
                {
                label: "",
                field: "quick",
                width: "10%",
                display: function (row) {
                    return (
                    '<button type="button" data-id="' + row.user_id + '" class="quick-btn">Eliminar Amigo</button>'
                    );
                    },
                },
            ],
            rows: [
                {
                    name: "Biguel Marro"
                },
                {
                    name: "Wis Luilson"
                },
                {
                    name: "Roberto Félix"
                }
            ],
            totalRecordCount: 2,
            sortable: {
                order: "name",
                sort: "asc",
            },
            messages: {
                pagingInfo: "Showing {0}-{1} of {2}",
                pageSizeChangeLabel: "Row count:",
                gotoPageLabel: "Go to page:",
                noDataAvailable: "No data",
            },
        });
        
        const doSearch = (offset, limit, order, sort) => {
            friends_table.isLoading = true;
            friends_table.isReSearch = offset == undefined ? true : false;
            // do your search event to get newRows and new Total
            //friends_table.rows = newRows;
            //friends_table.totalRecordCount = newTotal;
            friends_table.sortable.order = order;
            friends_table.sortable.sort = sort;
            };

        const tableLoadingFinish = (elements) => {
        friends_table.isLoading = false;
        Array.prototype.forEach.call(elements, function (element) {
            if (element.classList.contains("name-btn")) {
            element.addEventListener("click", function () {
                // do your click event
                console.log(this.dataset.id + " name-btn click!!");
                });
            }
            if (element.classList.contains("quick-btn")) {
            // do your click event
            element.addEventListener("click", function () {
                console.log(this.dataset.id + " quick-btn click!!");
                });
            }
        });
        };

        const updateCheckedRows = (rowsKey) => {
            // do your checkbox click event
            console.log(rowsKey);
        };
        
            return {
                friends_table,
                //doSearch,
                tableLoadingFinish,
                updateCheckedRows,
            };
        }
    });
    */
</script>