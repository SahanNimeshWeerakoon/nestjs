import { Get, Controller, Post, Param } from '@nestjs/common';

@Controller('property')
export class PropertyController {
    @Get()
    findAll() {
        return "All Properties";
    }

    @Get("/:id")
    findOne(@Param("id") id: string) {
        return id;
    }

    @Post()
    create() {
        return "This will create property";
    }
}
