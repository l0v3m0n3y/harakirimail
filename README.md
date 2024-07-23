# harakirimail
JavaScript library for harakirimail.com
# main
```js
async function main(){
    const {harakirimail} = require('./harakirimail');
    const harakiri= new harakirimail();
    let req=await harakiri.get_messages("name")
    console.log(req)
}
main()
```
