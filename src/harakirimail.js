class harakirimail{
    constructor(){
        this.api = "https://harakirimail.com/api/v1"
        this.mailbox=null
        this.headers={"Host":"harakirimail.com","Referer":"https://harakirimail.com/","user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "XMLHttpRequest","Connection": "Keep-Alive"}
    }
    async get_messages(mailbox){
        let req=await fetch(`${this.api}/inbox/${mailbox}`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {harakirimail};