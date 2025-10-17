import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCalidadSiembraDto } from './dto/create-calidad-siembra.dto';
import { CalidadSiembraService } from './calidad_siembra.service';
import { CalidadSiembra } from './calidad_siembra.entity';
import { CalidadSiembraServiceView } from './calidad_siembra_view.service';
import { CalidadSiembraView } from './calidad_siembra_view.entity';

/**
 * Controlador para manejar rutas HTTP de CalidadSiembra.
 * Expone endpoints REST para crear y consultar registros.
 */
@Controller('calidad-siembra')
export class CalidadSiembraController {
  constructor(
    private readonly calidadSiembraService: CalidadSiembraService,
    private readonly calidadSiembraServiceView: CalidadSiembraServiceView,
  ) {}

  /**
   * Crea un nuevo registro.
   * POST /calidad-siembra
   */
  @Post()
  async create(
    @Body() createDto: CreateCalidadSiembraDto,
  ): Promise<CalidadSiembra> {
    return await this.calidadSiembraService.create(createDto);
  }

  /**
   * Devuelve todos los registros.
   * GET /calidad-siembra
   */
  @Get()
  async findAll(): Promise<CalidadSiembra[]> {
    return await this.calidadSiembraService.findAll();
  }

  @Get('report')
  async findAllReport(): Promise<CalidadSiembraView[]> {
    return await this.calidadSiembraServiceView.findAllReport();
  }
}
