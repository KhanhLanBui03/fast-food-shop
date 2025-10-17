import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const path = request.url;
        const startTime = Date.now();

        return next.handle().pipe(
            map((data) => ({
                success: true,
                message: data?.message || 'Thành công',
                data: Object.keys(data?.data || {}).length ? data.data : null,
                takenTime: `${Date.now() - startTime}ms`,
                date: new Date().toLocaleString('vi-VN'),
                path,
            })),
        );
    }
}
