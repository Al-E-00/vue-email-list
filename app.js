new Vue ({
    el:"#app",
    data: {
        mailList: [],
        counterAjax: 0,
    },
    methods:{
        generateMail(){
            for (let i = 0; i < 10; i++){
                this.mailList = [];
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((axiosResp)=>{
                    this.mailList.push(axiosResp.data.response);
                    this.counterAjax ++;
                })
            }
            this.counterAjax = 0;
        },
    }
})