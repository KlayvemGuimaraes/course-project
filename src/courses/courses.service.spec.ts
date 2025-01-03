import { CoursesService } from './courses.service';
import { randomUUID } from 'node:crypto';
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-course.dto';

describe('CoursesService unit tests', async () => {
  let service: CoursesService;
  let id: string
  let created_at: Date
  let expectOutputsTag: any
  let expectOutputsCourses: any
  let mockCourseRepository: any
  let mockTagRepository: any

  beforeEach(async () => { // roda antes de cada teste
    service = new CoursesService();
    id = randomUUID()
    created_at = new Date()

    expectOutputsTag = [
      {
        id,
        name: 'nstjs',
        created_at
      }
    ]

    expectOutputsCourses = [
      {
        id,
        name: 'test',
        description: 'test description',
        created_at,
        tags: expectOutputsTag
      }
    ]

    mockCourseRepository = [
      {
        create: jest.fn().mockReturnValue(Promise.resolve(expectOutputsCourses)),
        save: jest.fn().mockReturnValue(Promise.resolve(expectOutputsCourses)),
        update: jest.fn().mockReturnValue(Promise.resolve(expectOutputsCourses)),
        preload: jest.fn().mockReturnValue(Promise.resolve(expectOutputsCourses)),
        find: jest.fn().mockReturnValue(Promise.resolve(expectOutputsCourses)),
        findAll: jest.fn().mockReturnValue(Promise.resolve(expectOutputsCourses)),
        findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutputsCourses)),
        remove: jest.fn().mockReturnValue(Promise.resolve(expectOutputsCourses))
      }
    ]

    mockTagRepository = [
      {
        create: jest.fn().mockReturnValue(Promise.resolve(expectOutputsTag)),
        findOne:  jest.fn()
      }
    ]
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository

    expect(service).toBeDefined();

    
    const createCourseDTO: CreateCourseDTO = {
      name: 'test',
      description: 'test description',
      tags: ['nestjs']
    }

    const newCourse = await service.create(createCourseDTO)

    expect(mockCourseRepository.save).toHaveBeenCalled()
    expect(expectOutputsCourses.save).toStrictEqual(newCourse)
  });

  it('should list all courses', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository

    const courses = await service.findAll()

    expect(mockCourseRepository.find).toHaveBeenCalled()
    expect(expectOutputsCourses.save).toStrictEqual(courses)
  })

  it('should get course by id', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository

    const course = await service.findOne(id)

    expect(mockCourseRepository.findOne).toHaveBeenCalled()
    expect(expectOutputsCourses.save).toStrictEqual(course)
  })

  it('should update a course', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository

    expect(service).toBeDefined();

    
    const updateCourseDTO: UpdateCourseDTO = {
      name: 'test',
      description: 'test description',
      tags: ['nestjs']
    }

    const course = await service.update(id, UpdateCourseDTO)
    
    expect(mockCourseRepository.save).toHaveBeenCalled()
    expect(mockCourseRepository.preload).toHaveBeenCalled()
    expect(expectOutputsCourses.save).toStrictEqual(course)
  });

  
  it('should delete a course', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository

    const course = await service.remove(id)

    expect(mockCourseRepository.findOne).toHaveBeenCalled()
    expect(mockCourseRepository.remove).toHaveBeenCalled()
    expect(expectOutputsCourses.save).toStrictEqual(course)
  })
});