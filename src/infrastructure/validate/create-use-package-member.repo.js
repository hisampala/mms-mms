const z = require("zod")
const valid = z.object({
    packageid: z.string().uuid(),
    memberid: z.string().uuid(),
})

const CreateUsePackageValid = valid.parse;

module.exports = CreateUsePackageValid