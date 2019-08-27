<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Default Title
        </slot>
      </header>
      
      <section class="modal-body">
        <slot name="body">
          Default Body
        </slot>
      </section>
      
      <footer class="modal-footer">
        <slot name="footer">
          Default Footer
        </slot>
        
        <button
            type="button"
            class="modal-close"
            @click="close"
          >
            Close it!
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modal',
    
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };

</script>