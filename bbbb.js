const bbbb = {
    name:"component_b",
    template: ``,
    data() {
      return {
        bar:'I am bar! , a function from "component_b" component ! ',
        m: '"component_b" is mounted now !'
      };
    },    
    methods: {
      async test() {alert(this.bar)},
      async autoexec(){ console.log(this.m); },
    },
    mounted : function () {
      this.autoexec()
    }
  };