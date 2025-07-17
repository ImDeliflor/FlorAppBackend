import { IsOptional, IsString } from 'class-validator';

export class UpdateChecklistEsquejeDTO {
  @IsOptional()
  @IsString()
  check_1?: string;

  @IsOptional()
  @IsString()
  check_2?: string;

  @IsOptional()
  @IsString()
  check_3?: string;

  @IsOptional()
  @IsString()
  check_4?: string;
}
