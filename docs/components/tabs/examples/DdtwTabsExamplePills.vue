<template>
  <div class="vp-raw">
    <DdtwTabs
      v-model="activeTab"
      variant="pills"
      class="p-5"
    >
      <DdtwTab
        name="first"
        title="First"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?
      </DdtwTab>
      <DdtwTab
        name="second"
        title="Second"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.
      </DdtwTab>
      <DdtwTab
        name="third"
        title="Third"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.
      </DdtwTab>
      <DdtwTab
        name="fourth"
        title="Fourth"
        disabled
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis cupiditate ea error eveniet hic impedit in labore maxime, minima mollitia nam sapiente sint tempora tempore vel velit veniam, voluptatem.
      </DdtwTab>
    </DdtwTabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwTab, DdtwTabs } from '../../../../src/index'

const activeTab = ref('first')
</script>
