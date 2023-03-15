const z = require("zod")
const valid = z.object({
    memberid: z.string().min(1).uuid(),
    address: z.string().min(1),
    sub_district: z.string().min(1),
    district: z.string().min(1),
    province: z.string().min(1),
    post_code: z.string().min(1),
})
const CreateAddressValid = valid.parse
module.exports = CreateAddressValid