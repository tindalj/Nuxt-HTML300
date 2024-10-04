<template>
    <div>
      <!-- Read More Button and Collapsible Content -->
      <button class="btn btn-primary d-block mb-4" @click="toggleCollapse">Read More</button>
  
      <div v-if="collapseOpen" class="collapse show" id="data">
        <div>
          <div>Look at me. Look at me. Look at me. Look at me. Look at me.</div>
        </div>
      </div>
  
      <!-- Accordion -->
      <div id="accordion">
        <div class="card" v-for="(item, index) in accordionItems" :key="index">
          <div class="card-header" :id="'heading' + index">
            <h5 class="mb-0">
              <button
                class="btn btn-link"
                @click="toggleAccordion(index)"
                :aria-expanded="isAccordionOpen(index).toString()"
                :aria-controls="'collapse' + index"
              >
                {{ item.title }}
              </button>
            </h5>
          </div>
  
          <div
            :id="'collapse' + index"
            class="collapse"
            :class="{ show: isAccordionOpen(index) }"
            :aria-labelledby="'heading' + index"
          >
            <div class="card-body">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
  
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" @click="showModal = true">
        Launch demo modal
      </button>
  
      <!-- Modal -->
      <div
        class="modal fade"
        v-if="showModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="close" @click="showModal = false" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="showModal = false">
                Close
              </button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        collapseOpen: false,
        showModal: false,
        accordionItems: [
          {
            title: 'Collapsible Group Item #1',
            content:
              'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...'
          },
          {
            title: 'Collapsible Group Item #2',
            content:
              'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...'
          },
          {
            title: 'Collapsible Group Item #3',
            content:
              'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...'
          }
        ],
        openAccordionIndex: null
      }
    },
    methods: {
      toggleCollapse() {
        this.collapseOpen = !this.collapseOpen
      },
      toggleAccordion(index) {
        this.openAccordionIndex = this.openAccordionIndex === index ? null : index
      },
      isAccordionOpen(index) {
        return this.openAccordionIndex === index
      }
    }
  }
  </script>
  
  <style>
  /* Add any additional styling here */
  </style>
  