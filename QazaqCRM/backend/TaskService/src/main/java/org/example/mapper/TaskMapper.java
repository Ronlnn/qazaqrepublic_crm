package org.example.mapper;

import org.example.model.Task;
import org.example.dto.TaskDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TaskMapper {

    @Mapping(source = "title", target = "title")
    @Mapping(source = "description", target = "description")
    @Mapping(source = "ownerId", target = "ownerId")
    @Mapping(source = "executorId", target = "executorId")
    @Mapping(source = "deadline", target = "deadline")
    Task toEntity(TaskDTO taskDTO);

}
