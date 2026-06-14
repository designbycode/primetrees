<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('tree_stocks', function (Blueprint $table) {
            $table->id();

            $table->foreignId('tree_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->string('container_size');
            // examples: 100L, 200L, 1000L, Bag, Bare Root

            $table->unsignedInteger('quantity')->default(0);

            $table->decimal('price', 10, 2)->nullable();

            $table->boolean('is_available')->default(true);

            $table->timestamps();

            $table->index(['tree_id', 'container_size']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tree_stocks');
    }
};
