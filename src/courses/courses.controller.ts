import { Body, Controller, Get, Param, Post, Res, Patch, Delete, Put, HttpCode, HttpStatus} from '@nestjs/common';

@Controller('courses')
export class CoursesController {

    @Get() 
    findAll(@Res() response) {
        // return response.status(200).send('Listagem de cursos!'); // customização do response atraves do decorator @Res que permite manipular a resposta
        return response.status(200).json({ message: 'Listagem de Cursos'});
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `Course with id ${id}`;
    }

    @Post()
    create(@Body() body) {
        return body;
    }

    @Patch(':id') // Patch é utilizado para atualizar apenas um campo
    update(@Param('id') id: string, @Body() body) {
        console.log(body);
        return `Update course with id ${id}`;
    }

    @HttpCode(HttpStatus.NO_CONTENT) // Altera o status code da resposta para nao retornar nenhum conteudo, pois é um delete
    @Delete(':id')
    remove(@Param('id') id: string) {
        return `Delete course with id ${id}`;
    }
}