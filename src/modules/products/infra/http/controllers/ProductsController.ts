import { Request, Response } from "express";
import { container } from "tsyringe";
import GetProductsByEstablishmentIdService from "@modules/products/services/GetProductsByEstablishmentIdService";
import { instanceToPlain } from "class-transformer";
import RegisterProductService from "@modules/products/services/RegisterProductService";
import UpdateProductService from "@modules/products/services/UpdateProductService";
import DeleteProductService from "@modules/products/services/DeleteProductService";
import GetProductById from "@modules/products/services/GetProductById";

class ProductsController {
  async readUnique(request: Request, response: Response) {
    const { id } = request.params;

    const getProduct = container.resolve(GetProductById);

    const product = await getProduct.execute(id);

    return response.json(instanceToPlain(product));
  }
  async readAll(request: Request, response: Response) {
    const { establishment_Id } = request.params;

    const getProducts = container.resolve(GetProductsByEstablishmentIdService);

    const products = await getProducts.execute(establishment_Id);

    return response.json(instanceToPlain(products));
  }

  async create(request: Request, response: Response) {
    const product = request.body;

    const createProduct = container.resolve(RegisterProductService);

    const newProduct = await createProduct.execute(product);

    return response.json(instanceToPlain(newProduct));
  }

  async update(request: Request, response: Response) {
    const product = request.body;

    const updateProduct = container.resolve(UpdateProductService);

    const updatedProduct = await updateProduct.execute(product);

    return response.json(instanceToPlain(updatedProduct));
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteProduct = container.resolve(DeleteProductService);

    await deleteProduct.execute(id);

    return response.json({ message: "Produto removido com sucesso!" });
  }
}

export default ProductsController;
