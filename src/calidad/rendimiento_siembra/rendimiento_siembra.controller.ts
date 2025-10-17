import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateRendimientoSiembraDto } from './dto/create-rendimiento-siembra.dto';
import { RendimientoSiembraService } from './rendimiento_siembra.service';
import { RendimientoSiembra } from './rendimiento_siembra.entity';
import { RendimientoSiembraServiceView } from './rendimiento_siembra_view.service';

/**
 * Controlador que expone los endpoints del módulo de rendimiento de siembra.
 * Define las rutas HTTP y conecta con el servicio.
 */
@Controller('rendimiento-siembra')
export class RendimientoSiembraController {
  constructor(
    private readonly rendimientoSiembraService: RendimientoSiembraService,
    private readonly rendimientoSiembraServiceView: RendimientoSiembraServiceView,
  ) {}

  /**
   * POST /rendimiento-siembra
   * Crea un nuevo registro de rendimiento de siembra.
   */
  @Post()
  async create(
    @Body() createDto: CreateRendimientoSiembraDto,
  ): Promise<RendimientoSiembra> {
    return await this.rendimientoSiembraService.create(createDto);
  }

  /**
   * GET /rendimiento-siembra
   * Retorna todos los registros de rendimiento de siembra.
   */
  @Get()
  async findAll(): Promise<RendimientoSiembra[]> {
    return await this.rendimientoSiembraService.findAll();
  }

  @Get('report')
  async findAllReport() {
    return await this.rendimientoSiembraServiceView.findAll();
  }
}
