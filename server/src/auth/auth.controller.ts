import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import LoginDto from './dto/login.dto';
import RegisterDto from './dto/register.dto';
import JwtAuthGuard from './guards/jwtAuthGuard';
import { Public } from 'src/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() loginData: LoginDto, @Res() response) {
    const user = await this.authService.login(loginData);
    const token = this.authService.createAccessToken(user.id);
    response.cookie('jwt', token, { httpOnly: true });
    return response.send({
      message: 'Login successful',
      token: token,
      user: user,
    });
  }

  @Public()
  @Post('register')
  async register(@Body() registrationData: RegisterDto) {
    return this.authService.register(registrationData);
  }

  @Post('logout')
  async logout(@Res() response) {
    response.clearCookie('jwt');
    return response.send({
      message: 'Logout successful',
    });
  }
}
