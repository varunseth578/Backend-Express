const zod =  require("zod")
function validateinput(obj)
{
    const schema = zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })
    const response = schema.safeParse(obj);
    console.log(response);
}
validateinput({
    email:"ivarunseth@gmail.com",
    password : "asdasdasd"
});
