<template>
  <div class="vp-raw flex justify-center space-x-4">
    <DdtwAvatar
      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      status="online"
    />
    <DdtwAvatar
      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      status="busy"
    />
    <DdtwAvatar
      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      status="away"
    />
    <DdtwAvatar
      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      status="offline"
    />
  </div>
</template>

<script setup>
import { DdtwAvatar } from '../../../../src/index'
</script>
