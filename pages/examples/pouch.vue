<template lang="pug">
  v-layout
    v-container(fluid='', style='min-height: 0;', grid-list-lg='')
      v-layout(row='', wrap='')
        v-flex(xs6='')
          v-card
            v-card-title(primary-title='')
              .heading Sync Database
            v-card-text
              v-text-field(label='Serveradresse', required='', v-model="remoteUrl")
              v-btn(@click.stop="syncDb") Sync
        v-flex(xs6='')
          v-card
            v-card-title(primary-title='')
              .headline Pouch Login
            v-card-text 
              v-form.credentials(v-model='valid', ref="loginForm")
                v-text-field(:counter='10', label='Username', required='', v-model="username")
                v-text-field(label='Password', required='',v-model="password")
                v-btn(v-if='!$pouch.gotAuth',@click.stop="login") Login
                v-btn(v-if='!$pouch.gotAuth',@click.stop="register") Register
                v-btn(v-if='$pouch.gotAuth',@click.stop="logout") Logout
                .error(v-if='$pouch.authError') There was an error: {{ $pouch.authError.reason }}

        v-flex(xs12='')
          v-card
            v-card-title(primary-title='')
              .headline Pouch Session
            v-card-text
              | {{$pouch.session}}
          v-card
            v-card-title(primary-title='')
              .headline Pouch Errors
            v-card-text {{$pouch.errors}}
          v-card
            v-card-title(primary-title='')
              .headline Pouch gotAuth
            v-card-text {{$pouch.gotAuth}}
          v-card
            v-card-title(primary-title='')
              .headline Pouch loading
            v-card-text {{$pouch.loading}}

</template>

<script>
export default {
  data:()=>({
    username: "matthias",
    password: "test",
    remoteUrl: process.env.remoteUrl || 'https:/42.233.1.44/sample',
    valid: null
  }),
  methods: {
    login() {
      if (this.username && this.password) {
        console.log("Logging in: ",this.username)
        this.$pouch.useAuth(this.username, this.password)
      }
    },
    register() {
      if (this.username && this.password) {
        console.log("Registering in: ",this.username)
        this.$pouch.createUser(this.username, this.password)
      }
    },
    logout() {
      this.$pouch.resetAuth()
    },
    syncDb() {
      this.$pouch.sync('sample', `${process.env.remoteUrl}/sample`);
    }
  },
  pouch: {
    todo: {}, 
    settings: {}
  },
  async created(context) {
    // this.$pouch.sync('breed', `${process.env.remoteUrl}/breed`);
  }
}
</script>
