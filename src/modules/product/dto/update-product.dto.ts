import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";
export class UpdateProductDto {
    @IsOptional()
    @IsString()
    name!: string;
    @IsOptional()
    @IsString()
    slug!: string;
    @IsOptional()
    @IsString()
    description?: string;
    @IsOptional()
    @IsNumber()
    basePrice!: number;
    @IsOptional()
    @IsString()
    imageUrl!: string;
    @IsOptional()
    @IsBoolean()
    isActive!: boolean;
    @IsOptional()
    @IsBoolean()
    isFeatured!: boolean;

}