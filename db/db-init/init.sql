-- CreateTable Member
CREATE TABLE IF NOT EXISTS "member" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "birth_day" TIMESTAMP(3) NOT NULL,
    "number_phone" TEXT NOT NULL,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_date" TIMESTAMP(3) NOT NULL DEFAULT NOW(),

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable Address_memeber
CREATE TABLE  IF NOT EXISTS "address_memeber" (
    "id" TEXT NOT NULL,
    "memberid" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "sub_district" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "post_code" TEXT NOT NULL,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_date" TIMESTAMP(3) NOT NULL DEFAULT NOW(),

    CONSTRAINT "Address_memeber_pkey" PRIMARY KEY ("id")
);

-- CreateTable Address_delivery
CREATE TABLE IF NOT EXISTS "address_delivery" (
    "id" TEXT NOT NULL,
    "memberid" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "sub_district" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "post_code" TEXT NOT NULL,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_date" TIMESTAMP(3) NOT NULL  DEFAULT NOW(),

    CONSTRAINT "Address_delivery_pkey" PRIMARY KEY ("id")
);

-- CreateTable Package
CREATE TABLE  IF NOT EXISTS "package" (
    "id" TEXT NOT NULL,
    "package_name" TEXT NOT NULL,
    "package_detail" TEXT NOT NULL,
    "date_use" INTEGER NOT NULL,
    "service_charge" INTEGER NOT NULL,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_date" TIMESTAMP(3) NOT NULL  DEFAULT NOW(),

    CONSTRAINT "Package_pkey" PRIMARY KEY ("id")
);

-- CreateTable Use_package
CREATE TABLE IF NOT EXISTS "use_package" (
    "id" TEXT NOT NULL,
    "packageid" TEXT NOT NULL,
    "memberid" TEXT NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expire_date" TIMESTAMP(3) NOT NULL,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_date" TIMESTAMP(3) NOT NULL  DEFAULT NOW(),

    CONSTRAINT "Use_package_pkey" PRIMARY KEY ("id")
);

-- CreateIndex Member_number_phone_key
CREATE UNIQUE INDEX "Member_number_phone_key" ON "member"("number_phone");

-- CreateIndex Member_first_name_last_name_number_phone_id_idx
CREATE INDEX "Member_first_name_last_name_number_phone_id_idx" ON "member"("first_name", "last_name", "number_phone", "id");

-- CreateIndex Address_memeber_memberId_key
CREATE UNIQUE INDEX "Address_memeber_memberId_key" ON "address_memeber"("memberid");

-- CreateIndex Address_memeber_memberId_sub_district_district_province_pos_idx
CREATE INDEX "Address_memeber_memberId_sub_district_district_province_pos_idx" ON "address_memeber"("memberid", "sub_district", "district", "province", "post_code", "id");

-- CreateIndex Address_delivery_memberId_key
CREATE UNIQUE INDEX "Address_delivery_memberId_key" ON "address_delivery"("memberid");

-- CreateIndex Address_delivery_memberId_sub_district_district_province_po_idx
CREATE INDEX "Address_delivery_memberId_sub_district_district_province_po_idx" ON "address_delivery"("memberid", "sub_district", "district", "province", "post_code", "id");

-- CreateIndex Package_package_name_key
CREATE UNIQUE INDEX "Package_package_name_key" ON "package"("package_name");

-- CreateIndex Package_package_name_package_detail_id_idx
CREATE INDEX "Package_package_name_package_detail_id_idx" ON "package"("package_name", "package_detail", "id");

-- CreateIndex Use_package_packageId_memberId_id_idx
CREATE INDEX "Use_package_packageId_memberId_id_idx" ON "use_package"("packageid", "memberid", "id");

-- AddForeignKey Address_memeber
ALTER TABLE "address_memeber" ADD CONSTRAINT "Address_memeber_memberId_fkey" FOREIGN KEY ("memberid") REFERENCES "member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey Address_delivery
ALTER TABLE "address_delivery" ADD CONSTRAINT "Address_delivery_memberId_fkey" FOREIGN KEY ("memberid") REFERENCES "member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey Use_package
ALTER TABLE "use_package" ADD CONSTRAINT "Use_package_packageId_fkey" FOREIGN KEY ("packageid") REFERENCES "package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey Use_package
ALTER TABLE "use_package" ADD CONSTRAINT "Use_package_memberId_fkey" FOREIGN KEY ("memberid") REFERENCES "member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
