export class CreateCategoryDto {
    name: string;
    slug: string;
    description?: string;
    sortOrder?: number;
    isActive?: boolean;
    
}