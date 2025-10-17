import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateCategoryDto{
    @IsOptional()
    @IsString()
    name?: string;
    @IsOptional()
    @IsString()
    slug?: string;
    @IsOptional()
    @IsString()
    description?: string;
    @IsOptional()
    @IsNumber()
    sortOrder?: number;
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}