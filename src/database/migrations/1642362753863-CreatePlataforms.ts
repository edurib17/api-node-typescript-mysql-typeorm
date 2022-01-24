import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreatePlataforms1642362753863 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "platforms",
              columns: [
                { name: "id", type: "varchar", isPrimary: true },
                { name: "name", type: "varchar", isUnique: true },
                { name: "created_at", type: "timestamp", default: "CURRENT_TIMESTAMP" },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("platforms");
    }

}
