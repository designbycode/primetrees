<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('trees', function (Blueprint $table) {
            $table->id();

            $table->foreignId('tree_category_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->string('common_name');
            $table->string('botanical_name')->nullable();

            $table->string('slug')->unique();

            $table->text('short_description')->nullable();
            $table->longText('description')->nullable();


            $table->string('mature_height')->nullable();
            $table->string('mature_width')->nullable();

            $table->enum('growth_rate', [
                'slow',
                'medium',
                'fast',
            ])->nullable();

            $table->enum('water_requirement', [
                'low',
                'medium',
                'high',
            ])->nullable();

            $table->enum('frost_tolerance', [
                'low',
                'medium',
                'high',
            ])->nullable();

            $table->enum('drought_tolerance', [
                'low',
                'medium',
                'high',
            ])->nullable();

            $table->string('flower_colour')->nullable();
            $table->string('flowering_season')->nullable();

            $table->boolean('is_evergreen')->default(false);
            $table->boolean('is_indigenous')->default(false);

            $table->boolean('is_featured')->default(false);
            $table->boolean('is_active')->default(true);

            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();

            $table->timestamps();

            $table->index('tree_category_id');
            $table->index('is_featured');
            $table->index('is_active');
            $table->index('common_name');
            $table->index('botanical_name');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('trees');
    }
};
