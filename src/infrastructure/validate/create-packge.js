const z = require("zod")
const valid = z.object({
    package_name: z.string().min(1),
    package_detail: z.string().min(1),
    date_use: z.number().min(1),
    service_charge: z.number().min(1)
})

const CreatePackageValid = valid.parse;

module.exports = CreatePackageValid