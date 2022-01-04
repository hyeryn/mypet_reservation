<template>
  <v-col style="font-family: 'Gowun Dodum', sans-serif;">
    <v-dialog
      ref="dialog"
      v-model="dateModal"
      :return-value.sync="date"
      persistent
      lazy
      full-width
      width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="date"
          :label="`${label}`"
          prepend-icon="event"
          readonly
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="date" scrollable>
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="dateModal = false">Cancel</v-btn>
        <v-btn flat color="primary" @click="set()">OK</v-btn>
      </v-date-picker>
    </v-dialog>

  </v-col>
</template>

<script>
import axios from 'axios'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
export default {
  name: "DateTimePicker",
  props: ['label'],
  data: () => ({
    date: "",
    dateModal: false,
  }),
  methods: {
    set() {
      this.$refs.dialog.save(this.date);
       const dateData = {
                date: this.date,
            }
            console.log(dateData)
            
            axios.post('http://34.64.202.151/profile/pet', dateData)
                .then(res => console.log(res))
                .catch(error => console.log(error))
    }
  },
}
</script>