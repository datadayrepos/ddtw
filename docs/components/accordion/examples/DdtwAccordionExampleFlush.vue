<template>
  <div class="vp-raw">
    <DdtwAccordion flush>
      <DdtwAccordionPanel>
        <DdtwAccordionHeader>header</DdtwAccordionHeader>
        <DdtwAccordionContent>
          <div>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to <a
                class="text-blue-600 dark:text-blue-500 hover:underline"
                href="/docs/getting-started/introduction/"
              >get started</a> and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </div>
        </DdtwAccordionContent>
      </DdtwAccordionPanel>
      <DdtwAccordionPanel>
        <DdtwAccordionHeader>another header</DdtwAccordionHeader>
        <DdtwAccordionContent>
          <div>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out the <a
                class="text-blue-600 dark:text-blue-500 hover:underline"
                href="https://flowbite.com/figma/"
              >Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </div>
        </DdtwAccordionContent>
      </DdtwAccordionPanel>
      <DdtwAccordionPanel>
        <DdtwAccordionHeader>and one more header</DdtwAccordionHeader>
        <DdtwAccordionContent>
          <div>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out the <a
                class="text-blue-600 dark:text-blue-500 hover:underline"
                href="https://flowbite.com/figma/"
              >Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </div>
        </DdtwAccordionContent>
      </DdtwAccordionPanel>
    </DdtwAccordion>
  </div>
</template>

<script setup>
import { DdtwAccordion, DdtwAccordionContent, DdtwAccordionHeader, DdtwAccordionPanel } from '../../../../src/index'
</script>
