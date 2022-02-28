<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username')->nullable(false)->comment('用户名');
            $table->string('password')->nullable(false)->comment('密码');
            $table->string('email')->nullable(true)->comment('邮箱');
            $table->string('nickname')->nullable(true)->comment('昵称');
            $table->dateTime('email_verified_at')->nullable();
            $table->dateTime('updated_at')->useCurrent()->useCurrentOnUpdate()->nullable(true)->comment('更新时间');
            $table->dateTime('created_at')->useCurrent()->nullable(true)->comment('创建时间');
            $table->index(['username'], 'idx_username');
            $table->index(['email'], 'idx_email');
            $table->index(['updated_at'], 'idx_updated_at');
            $table->index(['created_at'], 'idx_created_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
