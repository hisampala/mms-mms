const z = require("zod")
const valid = z.object({
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    birth_day: z.date(),
    number_phone: z.string().min(10).max(10)
})

const CreateMemberValid = valid.parse;

module.exports = CreateMemberValid