const aaaa = {
    name:"component_a",
    template: ``,
    data() {
      return {
        foo:'I am foo! , a function from "component_a" component ! ',
        m: '"component_a" is mounted now !'
      };
    },    
    methods: {
      async test() {alert(this.foo)},
      async autoexec(){ console.log(this.m); },
    },
    mounted : function () {
      this.autoexec()
    }
  };