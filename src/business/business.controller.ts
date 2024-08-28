import {
  Controller,
  Get,
  SetMetadata,
  UseGuards,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { BusinessService } from './business.service';
import { SkipCheckAccountSuspendedGuard } from 'src/common/guard';
// import { CreateBusinessDto } from './dto/create-business.dto';
// import { UpdateBusinessDto } from './dto/update-business.dto';

@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  // @Post()
  // create(@Body() createBusinessDto: CreateBusinessDto) {
  //   return this.businessService.create(createBusinessDto);
  // }

  @UseGuards(SkipCheckAccountSuspendedGuard)
  @SetMetadata('skipCheckAccountSuspended',true)
  @Get()
  findAll() {
    return this.businessService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.businessService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBusinessDto: UpdateBusinessDto) {
  //   return this.businessService.update(+id, updateBusinessDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.businessService.remove(+id);
  // }
}
