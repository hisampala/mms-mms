const z = require("zod")
const valid = z.object({
    id: z.string().uuid(),
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    birth_day: z.date(),

})

const UpdateMemberValid = valid.parse;

module.exports = UpdateMemberValid