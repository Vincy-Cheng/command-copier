<script setup lang="ts">
import { ref, computed } from "vue";
import { store } from "../../store/store";

const openGroup = ref<string | null>(null);

function toggleGroup(group: string) {
  openGroup.value = openGroup.value === group ? null : group;
}

function copyCommand(cmd: string) {
  navigator.clipboard.writeText(cmd);
}

const data = computed(() => {
  return Object.entries(store.commands);
});
</script>

<template>
  <div class="list-commands">
    <h2>Stored Commands</h2>
    <div v-for="[group, value] in data" :key="group" class="accordion-item">
      <div class="accordion-header" @click="toggleGroup(group.toString())">
        <h3>{{ group }}</h3>
        <i v-if="openGroup === group" class="pi pi-minus"></i>
        <i v-else class="pi pi-plus"></i>
      </div>
      <div v-if="openGroup === group" class="accordion-content">
        <ul>
          <li v-for="[index, cmd] in value.entries()" :key="cmd.command">
            <div>
              <p>{{ cmd.description }}</p>
              <p>$ {{ cmd.command }}</p>
            </div>

            <div class="accordion-content-actions">
              <button @click="copyCommand(cmd.command)">
                <i class="pi pi-clipboard"></i></button
              ><button
                @click="store.removeCommand(group, index)"
                id="delete-command-button"
              >
                <i class="pi pi-trash"></i>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.list-commands {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
}

.accordion-item {
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  background-color: #f7f7f7;
  color: black;
}

.accordion-header h3 {
  margin: 0;
}

.accordion-content {
  padding: 10px;
  border-top: 1px solid #ccc;
}

.accordion-content ul {
  list-style-type: none;
  padding: 0;
}

.accordion-content li {
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.accordion-content button {
  height: fit-content;
}

.accordion-content-actions {
  display: flex;
  gap: 10px;
}

#delete-command-button {
  background-color: #dc2626;
}
</style>
