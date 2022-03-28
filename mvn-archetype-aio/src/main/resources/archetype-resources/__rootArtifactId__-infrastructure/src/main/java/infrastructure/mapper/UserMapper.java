#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.infrastructure.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import ${package}.infrastructure.dataobject.UserDO;
import org.springframework.stereotype.Component;

/**
 * @author where
 */
@Component
public interface UserMapper extends BaseMapper<UserDO> {
}
