const z = require("zod")
const valid = z.object({
    id: z.string().uuid().min(1),
    package_name: z.string().min(1),
    package_detail: z.string().min(1),
    date_use: z.number().min(1),
    service_charge: z.number().min(1)
})

const UpdatePackageValid = valid.parse;

module.exports = UpdatePackageValid